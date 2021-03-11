if(message.content.startsWith("!mute")) {
  if(message.member.hasPermission("ADMINISTRATOR")) {
    let member = message.mentions.members.first()
    if(!member) message.channel.send("mention someone to mute!")
    else {
     member.roles.add("YOUR MUTED ROLE ID HERE")
      message.channel.send("Member has been succesfully muted.")
    }

  }else {
    message.reply("You don't have permission to do that!")
  }
}
