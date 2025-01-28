// Packages
import Link from 'next/link'

// Actions
import { getPosts } from '@/lib/posts'

// Components
import { Button } from '@/components/ui/button'
import PostsTable from './_components/PostsTable'

const PostsGrid = async () => {
    const postsResult = await getPosts()

    if (!postsResult) throw new Error('Failed to load posts.')

    const posts = postsResult?.data || []

    return (
        <section className="mx-4 rounded-lg border px-4">
            <nav className="flex items-center justify-between p-6 px-2 pb-12">
                <h2 className="text-lg font-bold">Posts</h2>
                <Button asChild>
                    <Link href="/admin/posts/create">Create a Post</Link>
                </Button>
            </nav>
            <PostsTable posts={posts} />
        </section>
    )
}

export default PostsGrid
