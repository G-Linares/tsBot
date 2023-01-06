import { ClientEvents, Awaitable, Client } from "discord.js";

// I know that this is super hacky
type LoggerFunction = (...args: unknown[]) => void
export interface EventProps {
    client:Client
    log: LoggerFunction
}