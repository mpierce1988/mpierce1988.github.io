export default class AboutMe {
    /**
     * 
     * @param {String} lead 
     * @param {String} topText 
     * @param {String} bottomText 
     * @param {String[]} items 
     * @param {String} pathToImage 
     */
    constructor(lead, topText, bottomText, items, pathToImage) {
        this.lead = lead;
        this.topText = topText;
        this.bottomText = bottomText;
        this.items = items;
        this.pathToImage = pathToImage;
    }

    static fromJson(obj) {
        //let obj = JSON.parse(json);

        let aboutMe = 
            new AboutMe(obj.lead, obj.topText, obj.bottomText, obj.items, 
                obj.pathToImage);

        return aboutMe;
    }
}