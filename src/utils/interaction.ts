// this will join the commands that are sepparated by a ;
// example = help_command;1;increment

export function createId(namespace: string, ...args: unknown[]): string {
    return `${namespace};${args.join(';')}`
}

export function readId(id: string): [ namespace: string, ...args: string[]]{
    const [namespace, ...args] = id.split(';')
    return [namespace, ...args]
}