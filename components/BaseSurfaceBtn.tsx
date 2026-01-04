export default function BaseSurfaceBtn({ tittle, action }: { tittle: string, action: () => void }) {
  return (
    <button onClick={action} className="w-full bg-surface-1 text-background py-2 hover:cursor-pointer">
      {tittle}
    </button>
  )
}
