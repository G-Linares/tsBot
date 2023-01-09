import { SelectMenuInteraction } from "discord.js";
import {EditReply, event, readId, Reply, createId} from  "../../utils"
import { Namespaces, getCategoryPage, getCategoryRoot } from './../../pages/help';


export default event('interactionCreate', async ({ log }, interaction) => {
       if(!interaction.isButton() && !interaction.isSelectMenu()) return
       const [namespace] = readId(interaction.customId)

       // If namespace not in help pages stop
       if(!Object.values(Namespaces).includes(namespace)) return

        try {
        // Defer update
        await interaction.deferUpdate()     
        switch(namespace){
            case Namespaces.root:  // <--- 1
                return await interaction.editReply(getCategoryRoot())

            case Namespaces.select:  // <--- 2
                const newId = createId(
                   Namespaces.select,
                   (interaction as SelectMenuInteraction).values[0]
                )
                return await interaction.editReply(getCategoryPage(newId))

            case Namespaces.action:   // <--- 3
                return await interaction.editReply(getCategoryPage(interaction.customId))

            default:  // <--- 4
                throw new Error('Invalid namespace reached...')

        }
        } catch(error) {
            log('[Help Error]', error)
            if(interaction.deferred) {
                return  interaction.editReply(
                    EditReply.error('Something went Wrong')
                )
            }
            return  interaction.reply(
                Reply.error('Something went Wrong')
            )
        }
    }
)
