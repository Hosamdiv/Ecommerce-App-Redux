import Button from "./ui/Button"
import Input from "./ui/Input"
import Textarea from "./ui/Textarea"

export const LoginForm = () => {
  return (
    <form className="space-y-3 max-w-sm mx-auto">
        <Input placeholder="Username" />
        <Input placeholder="Email Address" />
        <Input placeholder="Password" />
        <Textarea placeholder="Massage" />

        <Button fullWidth>Send feedback</Button>
    </form>
  )
}
