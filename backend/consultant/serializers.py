from rest_framework import serializers
from consultant.models import Consultant


class ConsultantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Consultant
        fields = '__all__'
