# coding: utf-8

"""
    OpenChallenges REST API

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

    The version of the OpenAPI document: 1.0.0
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


from __future__ import annotations
import pprint
import re  # noqa: F401
import json

from datetime import datetime
from typing import Optional
from pydantic import BaseModel, Field, StrictInt, StrictStr
from openchallenges_client.models.user_status import UserStatus

class User(BaseModel):
    """
    A simple user
    """
    id: Optional[StrictInt] = Field(None, description="The unique identifier of an account")
    login: StrictStr = Field(...)
    email: StrictStr = Field(..., description="An email address.")
    name: Optional[StrictStr] = None
    status: Optional[UserStatus] = None
    avatar_url: Optional[StrictStr] = Field(None, alias="avatarUrl")
    created_at: datetime = Field(..., alias="createdAt")
    updated_at: datetime = Field(..., alias="updatedAt")
    type: StrictStr = Field(...)
    bio: Optional[StrictStr] = None
    __properties = ["id", "login", "email", "name", "status", "avatarUrl", "createdAt", "updatedAt", "type", "bio"]

    class Config:
        """Pydantic configuration"""
        allow_population_by_field_name = True
        validate_assignment = True

    def to_str(self) -> str:
        """Returns the string representation of the model using alias"""
        return pprint.pformat(self.dict(by_alias=True))

    def to_json(self) -> str:
        """Returns the JSON representation of the model using alias"""
        return json.dumps(self.to_dict())

    @classmethod
    def from_json(cls, json_str: str) -> User:
        """Create an instance of User from a JSON string"""
        return cls.from_dict(json.loads(json_str))

    def to_dict(self):
        """Returns the dictionary representation of the model using alias"""
        _dict = self.dict(by_alias=True,
                          exclude={
                          },
                          exclude_none=True)
        # set to None if name (nullable) is None
        # and __fields_set__ contains the field
        if self.name is None and "name" in self.__fields_set__:
            _dict['name'] = None

        # set to None if avatar_url (nullable) is None
        # and __fields_set__ contains the field
        if self.avatar_url is None and "avatar_url" in self.__fields_set__:
            _dict['avatarUrl'] = None

        # set to None if bio (nullable) is None
        # and __fields_set__ contains the field
        if self.bio is None and "bio" in self.__fields_set__:
            _dict['bio'] = None

        return _dict

    @classmethod
    def from_dict(cls, obj: dict) -> User:
        """Create an instance of User from a dict"""
        if obj is None:
            return None

        if not isinstance(obj, dict):
            return User.parse_obj(obj)

        _obj = User.parse_obj({
            "id": obj.get("id"),
            "login": obj.get("login"),
            "email": obj.get("email"),
            "name": obj.get("name"),
            "status": obj.get("status"),
            "avatar_url": obj.get("avatarUrl"),
            "created_at": obj.get("createdAt"),
            "updated_at": obj.get("updatedAt"),
            "type": obj.get("type"),
            "bio": obj.get("bio")
        })
        return _obj

