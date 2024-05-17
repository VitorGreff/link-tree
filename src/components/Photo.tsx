import photo from '../assets/profile_photo.jpeg'
export default function Photo() {
    return (
        <img src={photo} alt="profile" className={`h-28 w-28 rounded-full`} />
    )
}
