import './App.css'
import Products from './components/Products'

let userdata = [ {
    "id": 7,
    "email": "michael.lawson@reqres.in",
    "first_name": "Michael",
    "last_name": "Lawson",
    "avatar": "https://reqres.in/img/faces/7-image.jpg",
    "address":"AvxcvBC"
},
{
    "id": 8,
    "email": "lindsay.ferguson@reqres.in",
    "first_name": "Lindsay",
    "last_name": "Ferguson",
    "avatar": "https://reqres.in/img/faces/8-image.jpg",
    "address":"hjkhj"
},
{
    "id": 9,
    "email": "tobias.funke@reqres.in",
    "first_name": "Tobias",
    "last_name": "Funke",
    "avatar": "https://reqres.in/img/faces/9-image.jpg",
    "address":"erter"
},
{
    "id": 10,
    "email": "byron.fields@reqres.in",
    "first_name": "Byron",
    "last_name": "Fields",
    "avatar": "https://reqres.in/img/faces/10-image.jpg",
    "address":"AxcvcBC"
},
{
    "id": 11,
    "email": "george.edwards@reqres.in",
    "first_name": "George",
    "last_name": "Edwards",
    "avatar": "https://reqres.in/img/faces/11-image.jpg",
    "address":"bnmnbABC"
},
{
    "id": 12,
    "email": "rachel.howell@reqres.in",
    "first_name": "Rachel",
    "last_name": "Howell",
    "avatar": "https://reqres.in/img/faces/12-image.jpg",
    "address":"werweBC"
}
]
function App(){
    //return (<div><h1 className="myheader">from appcomponent</h1><p className="mypara">testpara</p></div>)
    return (<div className='col-sm-12'>
         <ul className='dropdown'>
    <Products id={userdata[0].id}
        email={userdata[0].email}
        firstname={userdata[0].first_name}
        lastname={userdata[0].last_name}
        avatar={userdata[0].avatar}></Products>

    <Products id={userdata[1].id}
        email={userdata[1].email}
        firstname={userdata[1].first_name}
        lastname={userdata[1].last_name}
        avatar={userdata[1].avatar}></Products>

<Products id={userdata[2].id}
        email={userdata[2].email}
        firstname={userdata[2].first_name}
        lastname={userdata[2].last_name}
        avatar={userdata[2].avatar}></Products>

<Products id={userdata[3].id}
        email={userdata[3].email}
        firstname={userdata[3].first_name}
        lastname={userdata[3].last_name}
        avatar={userdata[3].avatar}></Products>

<Products id={userdata[4].id}
        email={userdata[4].email}
        firstname={userdata[4].first_name}
        lastname={userdata[4].last_name}
        avatar={userdata[4].avatar}>
          
        </Products>
        </ul>
    </div>)
}

export default App