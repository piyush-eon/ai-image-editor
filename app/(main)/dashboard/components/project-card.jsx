import { Edit, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatDistanceToNow } from "date-fns";

export default function ProjectCard({ project, onEdit }) {
  const lastUpdated = formatDistanceToNow(new Date(project.updatedAt), {
    addSuffix: true,
  });

  const handleDelete = () => {
    // TODO: Implement delete functionality with confirmation
    console.log("Delete project:", project._id);
  };

  return (
    <div className="group relative bg-slate-800/50 rounded-xl border border-white/10 overflow-hidden hover:border-white/20 transition-all hover:transform hover:scale-[1.02]">
      {/* Thumbnail */}
      <div className="aspect-video bg-slate-700 relative overflow-hidden">
        {project.thumbnailUrl ? (
          <img
            src={project.thumbnailUrl}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-white/30 text-4xl">🎨</div>
          </div>
        )}

        {/* Hover Actions */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
          <Button variant="glass" size="sm" onClick={onEdit} className="gap-2">
            <Edit className="h-4 w-4" />
            Edit
          </Button>
          <Button
            variant="glass"
            size="sm"
            onClick={handleDelete}
            className="gap-2 text-red-400"
          >
            <Trash2 className="h-4 w-4" />
            Delete
          </Button>
        </div>
      </div>

      {/* Project Info */}
      <div className="p-4">
        <h3 className="font-semibold text-white mb-1 truncate">
          {project.title}
        </h3>

        <div className="flex items-center justify-between text-sm text-white/70">
          <span>Updated {lastUpdated}</span>
          <span className="text-xs bg-slate-700 px-2 py-1 rounded">
            {project.width} × {project.height}
          </span>
        </div>
      </div>
    </div>
  );
}
