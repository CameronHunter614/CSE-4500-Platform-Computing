import time
from selenium import webdriver
from selenium.webdriver.common.by import By
import collections
import csv

def findKeyword(driver, keyword)->bool:
    
    #print(driver.page_source.lower())
    return keyword.lower() in driver.page_source.lower()

def countElements(driver, tag_name)->int:

    return len(driver.find_elements(By.TAG_NAME, tag_name))

def userAction(action, driver, reward_time, req_list)->float:
    total_reward_time = 0
    if action.upper() == "KEYWORD":
        for keyword in req_list:
            if findKeyword(driver, keyword):
                print("found", keyword)
                time.sleep(reward_time)

def clickLink(driver, href):
    links = driver.find_elements(By.TAG_NAME, )

def main():
    
    driver = webdriver.Chrome()

    driver.get("http://localhost:3000/")
    reward_time = 10
    total_reward_time = userAction("KEYWORD", driver, reward_time, ["student", "test"])
    keywords = ["student", "test"]
    tags = ["img"]
    
    for keyword in keywords:    
        
        if findKeyword (driver, keyword):
            
            total_reward_time += reward_time
            time.sleep(reward_time)

    driver.quit()
    print("Presence Time: ", total_reward_time, "seconds")

    if __name__ == "__main__":
        main()