
export default class Project {
    /**
     * 
     * @param {String} projectName 
     * @param {String} projectDescription 
     * @param {String} linkToProjectImage 
     * @param {String[]} features 
     * @param {String} linkToProject 
     */
    constructor(projectName, projectDescription, linkToProjectImage, features = [], linkToProject){
        this.projectName = projectName,
        this.projectDescription = projectDescription,
        this.linkToProjectImage = linkToProjectImage,
        this.features = features,
        this.linkToProject = linkToProject
    }

    static fromJson(json) {
        let obj = JSON.parse(json);
        let project = 
            new Project(obj.projectName, obj.projectDescription, obj.linkToProjectImage, 
                obj.features, obj.linkToProject);

        return project;
    }


}