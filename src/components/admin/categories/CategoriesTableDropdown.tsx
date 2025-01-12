'use client'

import { Button } from '@/components/ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { deleteCategory } from '@/lib/categories'
import { Category } from '@/lib/types'
import { DotsHorizontalIcon } from '@radix-ui/react-icons'
import { Pencil, Trash } from 'lucide-react'
import Link from 'next/link'

type CategoriesTableDropdownProps = Readonly<{
    category: Category
    onCategoryDelete: (deletedCategory: Category) => void
}>

const CategoriesTableDropdown = ({
    category,
    onCategoryDelete,
}: CategoriesTableDropdownProps) => {
    const handleDeleteCategory = async () => {
        try {
            const deletedCategory = await deleteCategory(category.id)
            onCategoryDelete(deletedCategory)
        } catch (error) {
            console.error('Error deleting category:', error)
        }
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    className="size-8 p-0 hover:bg-gray-200"
                >
                    <span className="sr-only">Open menu</span>
                    <DotsHorizontalIcon className="size-4" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem asChild className="gap-4 p-2">
                    <Link href={`/admin/categories/${category.id}/edit`}>
                        <Pencil />
                        Edit
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                    onClick={handleDeleteCategory}
                    className="gap-4 p-2 text-red-600 focus:text-red-600"
                >
                    <Trash />
                    Delete
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default CategoriesTableDropdown