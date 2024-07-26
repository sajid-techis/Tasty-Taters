from django.db import models

class Review(models.Model):
    item = models.ForeignKey('items.Item', on_delete=models.CASCADE, db_index=True)
    name = models.CharField('Name', blank=False, null=False, max_length=50, db_index=True)
    body = models.TextField('Body', blank=False, null=False, max_length=1000, db_index=True)
    like_count = models.IntegerField('Like Count', blank=False, null=False)
    created_at = models.DateTimeField('Created Datetime', blank=True, auto_now_add=True)
    updated_at = models.DateTimeField('Updated Datetime', blank=True, auto_now=True)

    class Meta:
        db_table = "Reviews"