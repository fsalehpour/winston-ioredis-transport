Feature: redis transport

  Scenario: sends logs to pubsub channel
    Given a winston logger with IORedis is set up for channel "logs"
    When message "This is a test" is logged
    Then "This is a test" is published on channel "logs"