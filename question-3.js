// เริ่มเขียนโค้ดตรงนี้
async function getUsers() {
    let usersNameLongerThanSeventeen;

    try {

        let usersDataResponse = await fetch("https://jsonplaceholder.typicode.com/users");
        let usersData = await usersDataResponse.json();

        usersNameLongerThanSeventeen = usersData.filter((user) => user.name.length > 17);
        return console.log(usersNameLongerThanSeventeen.map((user) => user.name));

    } catch (error) {
        return console.log(`Something went wrong: ${error}`);
    }
    
}

getUsers()