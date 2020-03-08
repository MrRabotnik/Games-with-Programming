import pygame
import random
import math

pygame.init()

screen = pygame.display.set_mode((800,600))

pygame.display.set_caption("Pong Game by Sargis")
icon = pygame.image.load('ping-pong.png')
pygame.display.set_icon(icon)
running = True
while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False
    pygame.display.update()

