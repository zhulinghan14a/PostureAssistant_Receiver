def on_button_pressed_a():
    basic.show_icon(IconNames.HEART)
    radio.send_value("li", 1)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_received_value(name, value):
    global s, zz, l, sd
    # 按键名逐一映射到本地变量槽
    if name == "s":
        s = value
    elif name == "zz":
        zz = value
    elif name == "l":
        l = value
        serial.write_value("l:", l)
    elif name == "sd":
        sd = value
radio.on_received_value(on_received_value)

hold_data_receive = 0
s = 0
zz = 0
l = 0
sd = 0
# 参数区
min_l = 50
max_sd = 80
# 变量区
sd = -1
l = -1
zz = -1
s = -1
radio.set_group(1)
s = -1
while True:
    hold_data_receive = 0
    if hold_data_receive == 1:
        basic.pause(100)
        continue
    if zz == 1:
        basic.show_icon(IconNames.FABULOUS)
    elif 0 <= l and l < min_l:
        basic.show_icon(IconNames.ASLEEP)
    elif sd > max_sd:
        basic.show_icon(IconNames.ANGRY)
    else:
        basic.show_icon(IconNames.HAPPY)
    basic.pause(100)