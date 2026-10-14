export default function PostTitle({ children }) {
  return (
    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-8 text-center text-text-color max-w-4xl mx-auto">
      {children}
    </h1>
  )
}
