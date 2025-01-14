import 'quill/dist/quill.snow.css'
import { useEffect } from 'react'
import { useQuill } from 'react-quilljs'
import { modules, formats } from '@/lib/quill'

type EditorProps = {
    value?: string
    onChange: (value: string) => void
}

const TextEditor = ({
    value,
    onChange,
    className,
}: EditorProps & { className?: string }) => {
    const { quill, quillRef } = useQuill({
        modules,
        formats,
        theme: 'snow',
    })

    // Sync the editor content with the parent component
    useEffect(() => {
        if (quill) {
            quill.on('text-change', () => {
                const editorValue = quill.root.innerHTML
                onChange(editorValue)
            })
        }
    }, [quill, value, onChange])

    if (!quillRef) {
        return <div>Loading editor...</div>
    }

    return <div ref={quillRef} className={className} />
}

export default TextEditor
