import Project from "../models/project.js"

export const projectExistById = async (id = '') => {
    const projectExistById = await Project.findById(id);
    if (!projectExistById) {
        throw new Error(`Project not found`);
    }
    if (!projectExistById.state) {
        throw new Error(`Project not found`);
    }
}

export async function categoryExist(category = ""){
    const categories = [
        "Taller",
        "Practica Supervisada",
        "Tegnologia"
    ];
    if(!categories.includes(category))
        res.status(400).json({ msg :'No existe la categoria'});
}