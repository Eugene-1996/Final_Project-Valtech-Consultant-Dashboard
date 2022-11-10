from drf_writable_nested import WritableNestedModelSerializer
from rest_framework import serializers

from consultant.serializers import ConsultantSerializer
from skill.serializers import SkillSerializer
from timeframe.serializers import TimeFrameSerializer
from user_project.models import UserProject


class UserProjectSerializer(WritableNestedModelSerializer, serializers.ModelSerializer):
    class Meta:
        model = UserProject
        fields = '__all__'
        depth = 1

    tools = SkillSerializer(many=True, required=False)
    time_frame = TimeFrameSerializer(required=False)
    assignee = ConsultantSerializer(many=True, required=False)


# class PatchProjectImageSerializer(serializers.ModelSerializer):
#     image = serializers.ImageField(required=False)
#
#     class Meta:
#         model = UserProject
#         fields = '__all__'
#         depth = 1



class CreateProjectSerializer(serializers.ModelSerializer):
    # time_frame = TimeFrameSerializer(many=True)

    class Meta:
        model = UserProject
        fields = '__all__'
        depth = 1

    # def create(self, validated_data):
    #     timeframe_data = validated_data.pop('time_frame')
    #     project = UserProject.objects.create(**validated_data)
    #     for timeframe in timeframe_data:
    #         TimeFrame.objects.create(**timeframe)
    #     return project
