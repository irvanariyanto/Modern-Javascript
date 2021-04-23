// object literal


let user = {
    name: 'crystal',
    age: 30,
    email: 'crystal@gamil.com',
    location: 'berlin',
    blogs: [
        {
            title: 'why mac & cheese rules',
            likes: 30,
        },
        {
            title: '10 things to make you happy',
            likes: 50,
        }
    ],
    login: function(){
        console.log('the user logged in');
    },
    logout: function(){
        console.log('the user logged out');
    },
    logBlogs: function(){
        console.log('this user has written the following blogs:');
        this.blogs.forEach(blog => {
            console.log(blog.title, blog.likes);
        });
    }
};

user.logBlogs();

// math object 
console.log(Math);

const area = 7.7;

console.log(Math.round(area));
console.log(Math.floor(area));
console.log(Math.ceil(area));
console.log(Math.trunc(area));

const random = Math.random();

console.log(random);
console.log(Math.round(random));