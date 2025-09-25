# WebSocket-practice-

This is a small experiment I made to understand how WebSockets work. It’s not a complete project, just a demo to see real-time communication in action.

🔹 What it does

Built in Visual Studio Code.

A simple interface with:

An input box

A send button

Messages printed in the console.

Example:
If I type Hey and press send → it prints Hey in the console.

🔹 Real-time test with two browsers

When I open the same project in two browsers (side by side):

If I send Hey from Browser 1 → it instantly appears in Browser 2 as well.

This works because both browsers are connected to the same WebSocket server.

🔹 Why it’s useful

This is the basic idea behind real-time chat apps like WhatsApp, Messenger, Discord.

In real chat systems:

User A sends a message → server broadcasts it → User B sees it instantly.
