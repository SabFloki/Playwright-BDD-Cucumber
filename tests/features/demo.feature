Feature: Demo on https://letcode.in/

    Scenario Outline: Login to letcode
        Given '<user>' is able to login letcode with '<password>'
        Examples:
            | user                 | password |
            | koushik350@gmail.com | Pass123$ |
