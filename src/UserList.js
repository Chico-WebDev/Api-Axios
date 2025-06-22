import React, { useEffect, useState } from 'react'
import axios from 'axios'

const UserList = () => {
    const [listOfUser, setListOfUser] = useState([])
    const [newError, setNewError] = useState(null)

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/users')
                setListOfUser(response.data)
                setNewError(null)
            } catch (err) {
                setNewError("Impossible de recupérer les utilisateurs")
                console.error(err)
                console.log(err, newError);
            }
        }
        fetchUser()
    } ,[] )
 
    return (
         <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 flex justify-center items-center">Liste des Utilisateurs</h1>

      {newError && <p className="text-red-500">{newError}</p>}

      <div className='flex flex-col justify-center items-center gap-5 md:flex-row gap-2 md:flex-wrap'> 
        {listOfUser.map((user) => (
            <div key={user.id} className="border border-gray-200 p-4 rounded shadow-md">
            <h2 className='font-semibold text-center'>{user.name}</h2>
            <p> <span className='font-semibold'>Email: </span> {user.email}</p>
            <p> <span className='font-semibold'>Téléphone: </span> {user.phone}</p>
            <p> <span className='font-semibold'>Entreprise: </span> {user.company.name}</p>
            </div>
        ))}
        </div>
    </div>
    )

}

export default UserList;