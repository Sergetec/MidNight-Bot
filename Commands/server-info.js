const { Client, CommandInteraction } = require('discord.js')
const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'server-info',
    description: 'displays server info',
    async execute(client, interaction){
        const { guild } = interaction;
        const mesaj = new MessageEmbed()
        .setColor("RED")
        .setAuthor(guild.name, guild.iconURL({dynamic: true}))
        .setThumbnail(guild.iconURL({dynamic: true}))
        .addField(
            'âšī¸ | GENERAL',
            `Name: ${guild.name}
            Created: <t:${parseInt(guild.createdTimestamp / 1000)}:R>
            Owner: <@${guild.ownerId}>`
        )
        .addField(
            'đ§âđŧ | USERS',
            `Total: ${guild.memberCount}`
        )
        .addField(
            'đ | CHANNELS',
            `- Text: ${guild.channels.cache.filter((c) => c.type === "GUILD_TEXT").size}
            - Voice: ${guild.channels.cache.filter((c) => c.type === "GUILD_VOICE").size}
            - Categories: ${guild.channels.cache.filter((c) => c.type === "GUILD_CATEGORY").size}
            
            Total: ${guild.channels.cache.size}`
        )
        .addField(
            'đ | EMOJIS',
            `- Animated: ${guild.emojis.cache.filter((e) => e.animated).size}
            - Static: ${guild.emojis.cache.filter((e) => !e.animated).size}
            - Stickers: ${guild.stickers.cache.size}
            
            Total: ${guild.stickers.cache.size + guild.emojis.cache.size}`
        )
        .addField(
            'â¨ | NITRO',
            `- Boosts: ${guild.premiumSubscriptionCount}`
        )
        .setFooter(`${process.env.VERSION} âĸ ${new Date(interaction.createdTimestamp).toLocaleDateString()}`)
        interaction.followUp({embeds: [mesaj]});
    }
}