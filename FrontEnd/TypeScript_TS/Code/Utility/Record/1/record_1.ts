type Info = {
    title: string;
    url: string;
};

type Page = "home" | "about" | "contact";

type Merged = {
    home: Info;
    about: Info;
    contact: Info;
};

type RecordMerged = Record<Page, Info>;

const pages: RecordMerged = {
    home: {
        title: "Home Page",
        url: "/home"
    },
    about: {
        title: "About Page",
        url: "/about"
    },
    contact: {
        title: "Contact Page",
        url: "/contact"
    }
};

console.log("Pages:", pages);

console.log("Home:", pages.home);
console.log("About:", pages.about);
console.log("Contact:", pages.contact);

console.log("Home Title:", pages.home.title);
console.log("Home URL:", pages.home.url);
