import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="chat-container">
          <div className="message-history">
            <div className="user-message">
              <p>User message</p>
            </div>
            <div className="bot-message">
              <p>Bot message</p>
            </div>
          </div>
          <div className="input-area">
            <input type="text" placeholder="Type your message here" className="message-input" />
            <button className="send-button">Send</button>
          </div>
        </div>
    </main>
  )
}
