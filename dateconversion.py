from datetime import datetime

# a datetime object contains all the information from a date object and a time object
datetime_object = datetime.fromisoformat('2024-12-04')
print(datetime_object.timestamp())
