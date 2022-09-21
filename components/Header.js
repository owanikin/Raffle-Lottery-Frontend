import { ConnectButton } from "web3uikit"

export default function Header() {
    return (
        <div>
            Raffle Lottery
            <ConnectButton moralisAuth={false}/>
        </div>
    )
}
