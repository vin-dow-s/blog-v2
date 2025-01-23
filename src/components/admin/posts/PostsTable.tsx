'use client'

// Packages
import { useRouter } from 'next/navigation'
import { useState } from 'react'

// Types
import { Post } from '@/lib/types'

// Components
import Badge from '@/components/Badge'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table'
import PostsTableDropdown from './PostsTableDropdown'

type PostsTableProps = {
    posts: Post[]
}

const PostsTable = ({ posts }: PostsTableProps) => {
    const [postList, setPostList] = useState(posts)
    const router = useRouter()

    const handleRowClick = (id: number) => {
        router.push(`/admin/posts/${id}`)
    }

    const handleStatusChange = async (
        updatedPostId: number,
        updatedData: Partial<Post>,
    ) => {
        try {
            setPostList((prevPosts) =>
                prevPosts.map((post) =>
                    post.id === updatedPostId
                        ? { ...post, ...updatedData }
                        : post,
                ),
            )
        } catch (error) {
            console.error('Failed to update post status:', error)
        }
    }

    const handleDeletePost = (deletedPostId: number) => {
        try {
            setPostList((prevPosts) =>
                prevPosts.filter((p) => p.id !== deletedPostId),
            )
        } catch (error) {
            console.error('Failed to delete post:', error)
        }
    }

    return (
        <Table className="min-h-56">
            <TableHeader>
                <TableRow>
                    <TableHead className="w-10">#</TableHead>
                    <TableHead className="w-80">Title</TableHead>
                    <TableHead className="w-16">Category</TableHead>
                    <TableHead className="w-48">Description</TableHead>
                    <TableHead className="w-16">Publication Date</TableHead>
                    <TableHead className="w-12">Status</TableHead>
                    <TableHead className="w-4"></TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {postList?.length > 0 &&
                    postList
                        .toSorted((a, b) => b.id - a.id)
                        .map((post) => (
                            <TableRow key={post.id}>
                                <TableCell>{post.id}</TableCell>
                                <TableCell
                                    onClick={() => handleRowClick(post.id)}
                                    className="cursor-pointer hover:underline"
                                >
                                    {post.title}
                                </TableCell>
                                <TableCell>
                                    <Badge
                                        color={post.Category.color}
                                        label={post.Category.name}
                                    />
                                </TableCell>
                                <TableCell>
                                    {post.description.substring(0, 40)}
                                </TableCell>
                                <TableCell>
                                    {post.publishedAt?.toLocaleDateString()}
                                </TableCell>
                                {post.isPublished && (
                                    <TableCell>
                                        <Badge
                                            color="green"
                                            label="Published"
                                        />
                                    </TableCell>
                                )}
                                {!post.isPublished && (
                                    <TableCell>
                                        <Badge color="darkgrey" label="Draft" />
                                    </TableCell>
                                )}
                                <TableCell>
                                    <PostsTableDropdown
                                        post={post}
                                        onStatusChange={handleStatusChange}
                                        onPostDelete={handleDeletePost}
                                    />
                                </TableCell>
                            </TableRow>
                        ))}
            </TableBody>
        </Table>
    )
}

export default PostsTable
