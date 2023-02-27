import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function Dashboard() {
    // const {
    //     user,
    //     getUser,
    //     retrieveUsers,
    //     getFriends,
    //     setEditUserCard,
    //     editUserCard
    // } = useContext(UserContext)
    // const { createFriendCard, setCreateFriendCard } = useContext(FriendContext)

    const token = window.localStorage.getItem("@token")
    const navigate = useNavigate()

    useEffect(() => {
        if (!token) {
            navigate(`/`, { replace: true })
        } else {
            // retrieveUsers()
            // getFriends()
            // getUser()
        }
    }, [])

    return (
        <main>
            <header>
                <Link to="/">
                    <button onClick={() => {
                        window.localStorage.clear()
                        return navigate(`/`, { replace: true })
                    }}> Sair
                    </button>
                </Link>
                <h2>DashBoard</h2>
                <div>
                    <section>
                        {/* <h2>Olá, {user.name}</h2> */}
                        <h2>Olá, user</h2>
                        {/* <p>Seu telefone: {user.phone}</p> */}
                        {/* <button onClick={() => setEditUserCard(true)}>
                            Edit
                        </button> */}
                    </section>
                </div>
            </header>
            {/* {createFriendCard ?
                <CreateFriendCard /> : null}
            {editUserCard ?
                <EditUserCard /> : null} */}
            <section>
                <div>
                    <h3>Todos os funcionários:</h3>
                    <ul>
                        {/* <AllUsersCard /> */}
                    </ul>
                </div>
            </section>
        </main>
    )
}

export default Dashboard