const nova = require('nova-colors')

const template = `
! special
*.foreground:   ${nova.uiGroups.foreground}
*.background:   ${nova.uiGroups.background}
*.cursorColor:  ${nova.uiGroups.userCurrentState}

! black
*.color0:       ${nova.ansiGroups.normal.black}
*.color8:       ${nova.ansiGroups.bright.black}

! red
*.color1:       ${nova.ansiGroups.normal.red}
*.color9:       ${nova.ansiGroups.bright.red}

! green
*.color2:       ${nova.ansiGroups.normal.green}
*.color10:      ${nova.ansiGroups.bright.green}

! yellow
*.color3:       ${nova.ansiGroups.normal.yellow}
*.color11:      ${nova.ansiGroups.bright.yellow}

! blue
*.color4:       ${nova.ansiGroups.normal.blue}
*.color12:      ${nova.ansiGroups.bright.blue}

! magenta
*.color5:       ${nova.ansiGroups.normal.magenta}
*.color13:      ${nova.ansiGroups.bright.magenta}

! cyan
*.color6:       ${nova.ansiGroups.normal.cyan}
*.color14:      ${nova.ansiGroups.bright.cyan}

! white
*.color7:       ${nova.ansiGroups.normal.white}
*.color15:      ${nova.ansiGroups.bright.white}
`;

process.stdout.write(template)
