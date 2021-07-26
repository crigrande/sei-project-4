# Generated by Django 3.2.5 on 2021-07-26 09:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('categories', '0002_rename_categories_category'),
        ('places', '0003_place_category'),
    ]

    operations = [
        migrations.AlterField(
            model_name='place',
            name='category',
            field=models.ManyToManyField(related_name='places', to='categories.Category'),
        ),
    ]
