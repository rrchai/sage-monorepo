# coding: utf-8

"""
    OpenChallenges REST API

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

    The version of the OpenAPI document: 1.0.0
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


import unittest

import openchallenges_client
from openchallenges_client.api.challenge_analytics_api import ChallengeAnalyticsApi  # noqa: E501
from openchallenges_client.rest import ApiException


class TestChallengeAnalyticsApi(unittest.TestCase):
    """ChallengeAnalyticsApi unit test stubs"""

    def setUp(self):
        self.api = openchallenges_client.api.challenge_analytics_api.ChallengeAnalyticsApi()  # noqa: E501

    def tearDown(self):
        pass

    def test_get_challenges_per_year(self):
        """Test case for get_challenges_per_year

        Get the number of challenges tracked per year  # noqa: E501
        """
        pass


if __name__ == '__main__':
    unittest.main()