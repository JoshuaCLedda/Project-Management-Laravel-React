<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Project;
use Illuminate\Http\Request;
use App\Http\Resources\ProjectResource;
use Illuminate\Container\Attributes\Auth;
use App\Http\Requests\StoreProjectRequest;
use App\Http\Requests\UpdateProjectRequest;

class ProjectContoller extends Controller
{
    /**
     * Display a listing of the resource.
     */
    // public function index()
    // {
    //     $query = Project::query();

    //     $projects = $query->paginate(10)->onEachSide(1);

    //     // to passs the project we need to pass the variables here
    //     return inertia("Project/Index", [
    //         "projects" => ProjectResource::collection($projects), //this have already pass
    //     ]);
    // }

    public function index()
    {
        $query = Project::query();

        // sorting function
        $sortField = request("sort_field", 'created_at');
        $sortDirection = request("sort_direction", "desc");
        

        if (request("name")) {
            $query->where("name", "like", "%" . request("name") . "%");
        }
        if (request("status")) {
            $query->where("status", request("status"));
        }

        $projects = $query
            ->orderBy($sortField, $sortDirection)
            ->paginate(10)->onEachSide(1);
        return inertia("Project/Index", [
            "projects" => ProjectResource::collection($projects),
            "queryParams" => request()->query() ?: null,
            "success" => session('success')
        ]);
    }



    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia("Project/Create", [
            "success" => session('success'),
        ]);
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'due_date' => 'required|date',
            'status' => 'required|in:pending,in_progress,completed',
            'image_path' => 'nullable|image|mimes:jpg,jpeg,png|max:2048',
        ]);

        $imagePath = null;
        if ($request->hasFile('image_path')) {
            $imagePath = $request->file('image_path')->store('projects', 'public');
        }

        $project = Project::create([
            'name' => $request->name,
            'description' => $request->description,
            'due_date' => $request->due_date,
            'status' => $request->status,
            'image_path' => $imagePath,
        ]);
        return to_route('project.create')->with('success', 'Project created successfully!');
    }

    /**
     * Display the specified resource.
     */
    public function show(Project $project)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Project $project)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProjectRequest $request, Project $project)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Project $project)
    {
        //
    }
}
