import time
from selenium import webdriver
import collections
import csv

def writeToCSV(filename : str, metrics: dict):
    with open(file=filename, mode="w", newline="") as fp:
        writer = csv.DictWriter(fp, fieldnames=metrics[0].keys())

        # Write header row
        writer.writeheader()

        # Write data rows
        for metric in metrics:
            writer.writerow(metric)

def main():
    # Initialize browser
    driver = webdriver.Chrome()

    # Navigate to your website 
    driver.get("http://localhost:3000/")

    # Initialize variables
    metrics = [] # {Presence Time (seconds) or Scrolling (Pixels)}
    filename = "metrics.csv"
    sample_size = 2
    count = 0
    start_time = time.time()

    while count < sample_size:
        # Track presence time
        current_time = time.time()
        presence_time = current_time - start_time
        print(f"Presence time: {presence_time} seconds")
        #metrics["Presence time (Seconds)"].append(presence_time)
        
        # Track scrolling
        scroll_height = driver.execute_script("return document.body.scrollHeight")  
        current_scroll = driver.execute_script("return window.pageYOffset")
        print(f"Scrolled {current_scroll}/{scroll_height} pixels")
        #metrics["Scrolling (Pixels)"].append(current_scroll/scroll_height)
        metrics.append({"TIMESTAMP (HH:MM:SS)": time.strftime("%H:%M:%S", time.localtime()), 
                        "Presence Time (Seconds)": presence_time,
                        "Scrolling (Pixels)": current_scroll/scroll_height})
        
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
    #print(metrics)
    writeToCSV("metrics.csv", metrics)

if __name__ == "__main__":
    main()