import time
from selenium import webdriver
import collections
import csv

def writeToCSV(filename, metrics):
    with open(filename, 'w', newline='') as csvfile:
        csvwriter = csv.writer(csvfile)

        # Write header row
        csvwriter.writerow(fields)

        # Write data rows
        csvwriter.writerow(metrics)

def main():
    # Initialize browser
    driver = webdriver.Chrome()

    # Navigate to your website 
    driver.get("http://localhost:3000/")

    # Initialize variables
    fields = ['Timestamp', 'Action Type', 'Value']
    metrics = [] # {Presence Time (seconds) or Scrolling (Pixels)}
    filename = "metrics.csv"
    sample_size = 10
    count = 0
    start_time = time.time()

    while count < sample_size:
        # Track presence time
        current_time = time.time()
        presence_time = current_time - start_time
        print(f"Presence time: {presence_time} seconds")
        metrics.append([current_time, 'Presence', presence_time])
        
        # Track scrolling
        scroll_height = driver.execute_script("return document.body.scrollHeight")  
        current_scroll = driver.execute_script("return window.pageYOffset")
        print(f"Scrolled {current_scroll}/{scroll_height} pixels")
        metrics.append([current_time, 'Scroll', current_scroll/scroll_height])
        
        count += 1
        time.sleep(2) 

        # Track clicks   
        # buttons = driver.find_elements_by_tag_name("button")
        # num_clicks = 0

        # for button in buttons:
        #     button.click()
        #     num_clicks += 1
            
        # print(f"Number of clicks: {num_clicks}")
            
    driver.quit()
    print(metrics)
    writeToCSV("metrics.csv", metrics)

if __name__ == "__main__":
    main()