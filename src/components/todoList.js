const todoList = [
    {
        id: 1,
        title: "1 My first Birthday",
        description: "We need to visit the grandma for the birthday gift & description",
        time: "10:00AM",
        date: "Sunday, 5 May 2021",
        category: 1
    },
    {
        id: 2,
        title: "2 Coding",
        description: "We need to visit the grandma for the birthday gift & description",
        time: "10:00AM",
        date: "Sunday, 5 May 2021",
        category: 2
    },
    
]

const categoryList = [
    {
        id: "",
        categoryName: "All",
    },
    {
        id: 1,
        categoryName: "Education",
        color: "blue",
    },
    {
        id: 2,
        categoryName: "Leisure",
        color: "rgb(32, 1, 90)",
    },
    {
        id: 3,
        categoryName: "Household",
        color: "rgb(71, 1, 45)",
    },
    {
        id: 4,
        categoryName: "Occasion",
        color: "rgb(4, 151, 53)",
    },
    {
        id: 5,
        categoryName: "Technology",
        color: "rgb(226, 194, 12)",
    },
    
    
    
]

const daysOfWeek = {
    1: "Monday", 2:"Tuesday", 3:"Wednesday", 4:"Thursday", 5:"Friday", 6:"Saturday", 7:"Sunday"
}


export function todoListData() {
    return todoList;
}

export function categoryListData() {
    return categoryList;
}




export function getCurrentDate() {
    const newDate = Date.now();
    const getDate = new Date(newDate);
    const daySwitch = getDate.getHours() < 12 ? "AM" : "PM";
    const timeFormat = (getDate.getMinutes()).toString().replace(/(\d{1}\s)/, '0$1');
    const currentTime = `${getDate.getHours()}:${timeFormat} ${daySwitch}`;
    //date
    const getYear = getDate.getFullYear();
    const getMonth = getDate.getMonth();
    const getDay = getDate.getDate();
    const getDaysInWeek = getDate.getDay();
    const currrentDate = `${daysOfWeek[getDaysInWeek]}, ${getDay} ${getMonth} ${getYear}`;

    const dateTime = [currrentDate, currentTime];
    return dateTime;    
}
