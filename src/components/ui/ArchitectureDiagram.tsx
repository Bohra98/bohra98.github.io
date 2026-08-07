interface ArchitectureDiagramProps {
  nodes: string[]
}

export function ArchitectureDiagram({ nodes }: ArchitectureDiagramProps) {
  return (
    <div className="flex flex-wrap items-center gap-2 overflow-x-auto py-2">
      {nodes.map((node, i) => (
        <div key={node} className="flex items-center gap-2">
          <div className="whitespace-nowrap rounded-md border border-primary/20 bg-primary/5 px-3 py-2 text-[0.7rem] text-ink">
            {node}
          </div>
          {i < nodes.length - 1 && (
            <span data-connector aria-hidden className="text-muted">
              →
            </span>
          )}
        </div>
      ))}
    </div>
  )
}
