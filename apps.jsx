import React, {useState, useEffect} from "react";
// import Films from './Films'
// import People from './People'

const App = () => {
    const [films, setfilms] = useState([])
    const [People, setpeople] = useState([])
    const [loadFilms, setLoadFilms] =useState([])
    const [loadPeople, setLoadPeople] =useState([])

    let FilmsLoaded = () => {
            fetch("https://ghibliapi.herokuapp.com/films")
            .then(res => res.json())
            .then(films => setfilms(films))

    }
    setLoadPeople(false)
     setLoadFilms(true)

    let PeopleLoaded = () => {
        fetch("https://ghibliapi.herokuapp.com/people")
        .then(res => res.json())
        .then(people => setpeople(people))
        setLoadFilms()
        setLoadPeople()
        
    }

    // return(
    //     <>
    //      <button onClick ={() =>FilmsLoaded()}>Load The Films</button>
    //     <button onClick ={() =>PeopleLoaded()}>Load The People</button>
    //     </>

if (loadFilms = true) {
    return (
        <>
        <button onClick={() => FilmsLoaded()}>Load Those Films!</button>
        <button onClick={() => PeopleLoaded()}>Load Those People!</button>
        {films.map(film => (
            // <Films film={film} />
            <>
            <h1>{film.title}</h1>
            <>
            <div class= "card">
                <div class= "card-body">
                    <h1>{props.film.title}</h1>
                    <p class="card-text">{props.film.age}</p>
                </div>
            </div>
        </>
            </>
           
            if (loadPeople = true) {
            return (
                <>
                <button onClick={() => FilmsLoaded()}>Load Those Films!</button>
                <button onClick={() => PeopleLoaded()}>Load Those People!</button>
                {people.map(person => (
                    <People people={person} />
                    ))}
                    </>
            )}
                }
                    export default App;