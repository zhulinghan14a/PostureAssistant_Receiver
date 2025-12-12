input.onButtonPressed(Button.A, function on_button_pressed_a() {
    basic.showIcon(IconNames.Heart)
    radio.sendValue("li", 1)
})
radio.onReceivedValue(function on_received_value(name: string, value: number) {
    
    //  按键名逐一映射到本地变量槽
    if (name == "s") {
        s = value
    } else if (name == "zz") {
        zz = value
    } else if (name == "l") {
        l = value
        serial.writeValue("l:", l)
    } else if (name == "sd") {
        sd = value
    }
    
})
let hold_data_receive = 0
let s = 0
let zz = 0
let l = 0
let sd = 0
//  参数区
let min_l = 50
let max_sd = 80
//  变量区
sd = -1
l = -1
zz = -1
s = -1
radio.setGroup(1)
s = -1
while (true) {
    hold_data_receive = 0
    if (hold_data_receive == 1) {
        basic.pause(100)
        continue
    }
    
    if (zz == 1) {
        basic.showIcon(IconNames.Fabulous)
    } else if (0 <= l && l < min_l) {
        basic.showIcon(IconNames.Asleep)
    } else if (sd > max_sd) {
        basic.showIcon(IconNames.Angry)
    } else {
        basic.showIcon(IconNames.Happy)
    }
    
    basic.pause(101)
}
