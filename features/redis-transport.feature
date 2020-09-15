Feature: redis transport

  Scenario: sends logs to pubsub channel
    Given a redis client is setup
    And the channel for log is called "logs"
    When message "This is a test" is logged
    Then "This is a test" is published on channel "logs"