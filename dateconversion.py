from datetime import datetime

# Change this variable to the desired date
date_string = '2024-12-13'

# a datetime object contains all the information from a date object and a time object
datetime_object = datetime.fromisoformat(date_string)
print(int(datetime_object.timestamp()))
