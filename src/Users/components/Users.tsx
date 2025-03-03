import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Users() {
    const dispatch = useDispatch();
    const { users }: { users: { data: any, error: string, loading: boolean } } = useSelector((state: any) => state.users);
    useEffect(() => {
        dispatch({ type: "USER_FETCH_REQUESTED", payload: { userId: 1 } });
    }, []);

    return (
        <div>
            <h2>User Component</h2>
            <h1>
                {
                    users.loading ? 'Loading.....' : users.error ? 'Failed to fetch users...' : 'User name is: '.concat(users.data?.name)
                }
            </h1>
        </div>
    )
}

export default Users;
