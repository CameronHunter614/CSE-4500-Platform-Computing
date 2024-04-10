import time
from selenium import webdriver
import collections
import csv

def findKeyword(driver, keyword):
    
    if keyword.lower() in driver.page_source.lower():
        return True
    
    else:
        return False

def main():
    
    driver = webdriver.Chrome()

    driver.get("http://localhost:3000/")
    reward_time = 1
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