<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreProjectRequest;
use App\Http\Requests\UpdateProjectRequest;
use App\Http\Resources\ProjectResource;
use App\Models\Project;
use Inertia\Inertia;

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


    // other way to fetch the data
    public function index()
    {
        $query = Project::query();
        $projects = $query->paginate(10)->onEachSide(1);
    
        return inertia("Project/Index", [
            "projects" => $projects, // Return full pagination response
        ]);
    }
    


    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia("Project/Create", [
        ]);
    }
    

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProjectRequest $request)
    {
        //
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
