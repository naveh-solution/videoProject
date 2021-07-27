class Actor{

   constructor (fname, lname, bDay, picLink, imdbLink){
        this.fname=fname;
        this.lname=lname;
        this.bDay=bDay;
        this.picLink=picLink;
        this.imdbLink=imdbLink;
    }

    ageCal(){
        let currentYear = new Date();
        currentYear = parseInt(currentYear.getFullYear());
        const bDayDtate = new Date(this.bDay);
        const bDayYear =parseInt(bDayDtate.getFullYear());

        return currentYear - bDayYear
    }

}


// const actors = [{
//     fname: "Matt",
//     lname: "LeBlanc",
//     bDay: "25-7-1967",
//     picLink: "../imgs/mattLeBlanc.jpg",
//     imdbLink: "https://www.imdb.com/name/nm0001455/",
// },
// {
//     fname: "David Bryan",
//     lname: "Woodside",
//     bDay: "25-7-1969",
//     picLink: "../imgs/DBWoodside.jpg",
//     imdbLink: "https://www.imdb.com/name/nm0940851/", 
// },
// {
//     fname: "Nicolas",
//     lname: "Cage",
//     bDay: "7-1-1964",
//     picLink: "../imgs/nicolasCage.jpg",
//     imdbLink: "https://www.imdb.com/name/nm0000115/", 
// },
// {
//     fname: "Julia",
//     lname: "Roberts",
//     bDay: "28-10-1967",
//     picLink: "../imgs/mattLeBlanc.jpg",
//     imdbLink: "https://www.imdb.com/name/nm0001455/", 
// },
// ]
export default Actor

