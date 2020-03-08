import random
import turtle
import math

# Creating Window
window = turtle.Screen()
# Nameing the window
window.title("Pong Game by Sargis")
# Setting Background-color
window.bgcolor("black")
# Setting window's size
window.setup(width=800, height=600)
# I done know what this does
window.tracer(0)

# First Player
first_player = turtle.Turtle()
first_player.speed(0)
first_player.shape("square")
first_player.color("green")
first_player.shapesize(stretch_wid=5, stretch_len=1)
first_player.penup()
first_player.goto(-350, 0)

# Second Player
second_player = turtle.Turtle()
second_player.speed(0)
second_player.shape("square")
second_player.color("yellow")
second_player.shapesize(stretch_wid=5, stretch_len=1)
second_player.penup()
second_player.goto(350, 0)

# Ball
ball = turtle.Turtle()
ball.speed(0)
ball.shape("circle")
ball.color("white")
ball.penup()
ball.goto(0, 0)
ball.dx = 0.2
ball.dy = 0.2

# Score
player1_score = 0
player2_score = 0
# Pen
pen = turtle.Turtle()
pen.speed(0)
pen.color('white')
pen.penup()
pen.hideturtle()
pen.goto(0, 260)
pen.write("Player 1: " + str(player1_score) + "Player 2:" + str(player2_score), align="center",
          font=("Courier", 24, "normal"))


# Functions
def first_player_up():
    y = first_player.ycor()
    y += 20
    if first_player.ycor() >= 250:
        y = -250
    first_player.sety(y)


def first_player_down():
    y = first_player.ycor()
    y -= 20
    if first_player.ycor() <= -250:
        y = 250
    first_player.sety(y)


def second_player_up():
    y2 = second_player.ycor()
    y2 += 20
    if second_player.ycor() >= 250:
        y2 = -250
    second_player.sety(y2)


def second_player_down():
    y2 = second_player.ycor()
    y2 -= 20
    if second_player.ycor() <= -250:
        y2 = 250
    second_player.sety(y2)


# KeyBoard Binding
window.listen()
window.onkeypress(first_player_up, "w")
window.onkeypress(first_player_down, "s")
window.onkeypress(second_player_up, "Up")
window.onkeypress(second_player_down, "Down")

# Running Cycle
running = True
while running:
    window.update()

    # Ball Movement
    ball.sety(ball.ycor() + ball.dy)
    ball.setx(ball.xcor() + ball.dx)
    if ball.ycor() >= 290:
        ball.sety(290)
        ball.dy *= -1
    elif ball.ycor() <= -290:
        ball.sety(-290)
        ball.dy *= -1
    if ball.xcor() >= 390:
        ball.goto(0, 0)
        ball.dx *= -1
        player1_score += 1
        pen.clear()
        pen.write("Player 1: " + str(player1_score) + " | Player 2: " + str(player2_score), align="center",font=("Courier", 24, "normal"))

    elif ball.xcor() <= -390:
        ball.goto(0, 0)
        ball.dx *= -1
        player2_score += 1
        pen.clear()
        pen.write("Player 1: " + str(player1_score) + " | Player 2: " + str(player2_score), align="center",font=("Courier", 24, "normal"))

    # Player and Ball Collision

    if -330 > ball.xcor() > -340 and first_player.ycor() + 60 > ball.ycor() > first_player.ycor() - 60:
        ball.setx(-330)
        ball.dx *= -1
    elif 330 < ball.xcor() < 340 and second_player.ycor() + 60 > ball.ycor() > second_player.ycor() - 60:
        ball.setx(330)
        ball.dx *= -1
