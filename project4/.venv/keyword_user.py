import time
from selenium import webdriver
import collections
import csv

def findKeyword(driver, keyword)->bool:
    #print(driver.page_source.lower())
    return keyword in driver.page_source

def main():
    driver = webdriver.Chrome()

    driver.get("http://localhost:3000/")
    reward_time = 10
    total_reward_time = 0
    keywords = ["senior", "game"]
    
    for key in keywords:    
        if findKeyword (driver, key):
            total_reward_time += reward_time
            time.sleep(reward_time)

    driver.quit()
    print("Presence Time: ", total_reward_time, "seconds")

if __name__ == "__main__":
    main()