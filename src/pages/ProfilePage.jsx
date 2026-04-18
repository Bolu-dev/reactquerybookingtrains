import { useUser } from "../features/auth/useUser"
import UpdateProfileForm from "../features/user/updateProfileForm"
import Button from "../ui/Button"
import Spinner from "../ui/Spinner"

function ProfilePage() {
    const {isAuthenticated, isLoading} = useUser()
    if(isLoading) return<Spinner/>

    if(!isAuthenticated) return(
        <div className="flex flex-col gap-4 mt-5 items-center text-center">
            
        <p className="text-stone-400">You need to login to view your profile</p>
        <Button to='/login' type="primary"/>
        </div>
    )
    return (
      <div className="max-w-md mx-auto px-4 py-10">
        {/* Header */}
        <h2 className="text-2xl font-bold text-train-dark mb-2">My Profile</h2>
        <p className="text-stone-400 text-sm mb-8">
          Manage your account details
        </p>

        <div className="bg-white rounded-2xl border border-stone-100 shadow-sm p-6">
          <UpdateProfileForm />
        </div>
      </div>
    );
}

export default ProfilePage
